import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { ssh } from 'zx'
import { openssh__install } from '../openssh/index.js'
import { run_id_ } from '../run_id/index.js'
import { ssh_keygen__comment_ } from '../ssh_keygen/index.js'
import { ssh_url_ } from '../ssh_url/index.js'
import { ssh_user_ } from '../ssh_user/index.js'
export const [
	ssh_key__name$_,
	ssh_key__name_,
	ssh_key__name__set,
] = be_sig_triple_(()=>'id_ed25519')
export const [
	ssh_key__passphrase$_,
	ssh_key__passphrase_,
	ssh_key__passphrase__set,
] = be_sig_triple_(()=>'')
export const [
	ssh_key__type$_,
	ssh_key__type_,
	ssh_key__type__set,
] = be_sig_triple_(()=>'ed25519')
export const ssh_key__generate = be_(ctx=>run(async ()=>{
	console.log('ssh_key__generate')
	await openssh__install(ctx)
	const ssh_key__path = `/home/${ssh_user_(ctx)}/.ssh/${ssh_key__name_(ctx)}`
	// language=sh
	await ssh(ssh_url_(ctx))`
		mkdir -p ~/.ssh/.bak
		if [ ! -f ${ssh_key__path} ]; then
		  ssh-keygen -t ${ssh_key__type_(ctx)} -C "${ssh_keygen__comment_(ctx)}" -N '${ssh_key__passphrase_(ctx)}' -f ${ssh_key__path}
	  fi
		echo IdentityFile ${ssh_key__path} > ~/.ssh/config.new
		function finish() {
			rm -f ~/.ssh/config.new
		}
		trap finish EXIT
		if diff ~/.ssh/config ~/.ssh/config.new; then
			rm ~/.ssh/config.new
		else
			cp -n ~/.ssh/config ~/.ssh/.bak/config.${run_id_(ctx)}
			mv ~/.ssh/config.new ~/.ssh/config
		fi
	`
}))
