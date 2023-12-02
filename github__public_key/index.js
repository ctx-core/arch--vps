import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { ssh } from 'zx'
import { ssh_key__scp } from '../ssh_key__scp/index.js'
import { ssh_url_ } from '../ssh_url/index.js'
export const [
	github__public_key$_,
	github__public_key_,
	github__public_key__set
] = be_sig_triple_(()=>undefined)
export const github__public_key__insert = be_(ctx=>run(async ()=>{
	await ssh_key__scp(ctx)
	// see https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints
	// language=sh
	await ssh(ssh_url_(ctx))`
		if ! ls ~/.ssh/known_hosts || grep -L ${github__public_key_(ctx)} ~/.ssh/known_hosts; then
			echo github.com ssh-ed25519 ${github__public_key_(ctx)} >> ~/.ssh/known_hosts
		fi
	`
}))
