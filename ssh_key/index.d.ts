import type { Be } from 'ctx-core/be'
import type { be_sig_triple_T } from 'ctx-core/rmemo'
export declare const [
	ssh_key__name$_,
	ssh_key__name_,
	ssh_key__name__set,
]:be_sig_triple_T<string>
export declare const [
	ssh_key__passphrase$_,
	ssh_key__passphrase_,
	ssh_key__passphrase__set,
]:be_sig_triple_T<string>
export declare const [
	ssh_key__type$_,
	ssh_key__type_,
	ssh_key__type__set,
]:be_sig_triple_T<string>
export declare const ssh_key__generate:Be<Promise<void>>
