import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { ssh } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
export const nvm__install = be_(ctx=>run(async ()=>{
	// language=sh
	await ssh(ssh_url_(ctx))`
			$NVM_DIR && exit 0
			echo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh
			curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
			. $NVM_DIR/nvm.sh
			nvm install
		`
}))
