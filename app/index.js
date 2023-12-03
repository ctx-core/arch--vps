import { be_memo_pair_, be_sig_triple_ } from 'ctx-core/rmemo'
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
