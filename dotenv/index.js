import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { ssh } from 'zx'
import { app_name_ } from '../app_name/index.js'
import { ssh_url_ } from '../ssh_url/index.js'
import { ssh_user_ } from '../ssh_user/index.js'
export const [
	dotenv$_,
	dotenv_,
	dotenv__set
] = be_sig_triple_(()=>({}))
export const dotenv__upload = be_(ctx=>run(async ()=>{
	console.log('dotenv__upload')
	const env = dotenv_(ctx)
	env.NODE_ENV = 'development'
	const dotenv__content_a = []
	for (let key in env) {
		dotenv__content_a.push(`${key}=${env[key]}`)
	}
	const dotenv__content = dotenv__content_a.join('\n')
	// language=sh
	await ssh(ssh_url_(ctx))`
		cat <<-EOF > /home/${ssh_user_(ctx)}/work/${app_name_(ctx)}/.env
${dotenv__content}
		EOF
	`
}))
