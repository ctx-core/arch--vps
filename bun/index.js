import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { ssh } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
export const [
	bun__version$_,
	bun__version_,
	bun__version__set,
] = be_sig_triple_(()=>null)
export const bun__install = be_(ctx=>run(async ()=>{
	console.log('bun__install')
	// language=sh
	await ssh(ssh_url_(ctx))`curl -fsSl https://bun.sh/install | bash${
		bun__version_(ctx) == null
			? ''
			: ` -s "${bun__version_(ctx)}"`
	}`
}))
