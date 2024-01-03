import { be_ } from 'ctx-core/be'
import { be_memo_pair_, be_sig_triple_ } from 'ctx-core/rmemo'
import { run } from 'ctx-core/run'
import { ssh } from 'zx'
import { direnv__install } from '../direnv/index.js'
import { ssh_url_ } from '../ssh_url/index.js'
import { work_path_ } from '../work/index.js'
export const [
	app_name$_,
	app_name_,
	app_name__set,
] = be_sig_triple_(()=>'app')
export const [
	app_path$_,
	app_path_,
] = be_memo_pair_(ctx=>`${work_path_(ctx)}/${app_name_(ctx)}`)
export const app__direnv_allow = be_(ctx=>run(async ()=>{
	console.log('app__direnv_allow')
	await direnv__install(ctx)
	// language=sh
	await ssh(ssh_url_(ctx))`
		cd ${app_path_(ctx)}
		direnv allow .
	`
}))
