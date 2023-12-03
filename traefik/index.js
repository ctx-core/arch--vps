import { file_exists__waitfor } from '@ctx-core/fs'
import { tempfile_path_ } from '@ctx-core/tempfile'
import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { be_memosig_triple_ } from 'ctx-core/rmemo'
import { unlink, writeFile } from 'fs/promises'
import { $, ssh } from 'zx'
import { acme__email_ } from '../acme/index.js'
import { ssh_url_ } from '../ssh_url/index.js'
export const [
	traefik_yml$_,
	traefik_yml_,
	traefik_yml__set,
] = be_memosig_triple_((ctx, traefik_yml$)=>{
	let val = traefik_yml$.val
	if (!('val' in traefik_yml$) || traefik_yml$.generated) {
		// language=yaml
		val = `
api:
  insecure: false

entryPoints:
  http:
    address: ":80"
    http:
      redirections:
        entrypoint:
          to: https
          scheme: https
  https:
    address: ":443"
    http:
      tls: true

ping:
  entryPoint: http

retry:

docker:
  endpoint: "unix:///var/run/docker.sock"
  watch: true
  exposedByDefault: false
  useBindPortIP: true

providers:
  docker:
    network: web

certificatesResolvers:
  acme:
    acme:
      email: ${acme__email_(ctx)}
      storage: /letsencrypt/acme.json
      httpChallenge:
        entryPoint: http
		`
		val.generated = 1
	}
	return val
})
export const traefik__install = be_(ctx=>run(async ()=>{
	// language=sh
	await ssh(ssh_url_(ctx))`
		pacman -S traefik --noconfirm
	`
	const tempfile_path = await tempfile_path_()
	await writeFile(tempfile_path, traefik_yml_(ctx))
	await file_exists__waitfor(tempfile_path)
	try {
		await $`scp ${tempfile_path} ${ssh_url_(ctx)}:/etc/traefik/traefik.yml`
	} finally {
		await unlink(tempfile_path)
	}
}))
