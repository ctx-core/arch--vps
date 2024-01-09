import { be_memo_pair_ } from 'ctx-core/rmemo'
import { ssh_host_ } from '../ssh_host/index.js'
import { ssh_user_ } from '../ssh_user/index.js'
export const [
	ssh_url$_,
	ssh_url_,
] = be_memo_pair_(
	ctx=>`${ssh_user_(ctx)}@${ssh_host_(ctx)}`)
