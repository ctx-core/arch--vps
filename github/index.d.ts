import type { Be } from 'ctx-core/be'
import type { be_sig_triple_T } from 'ctx-core/rmemo'
export declare const [
	github__public_key$_,
	github__public_key_,
	github__public_key__set
]:be_sig_triple_T<string|undefined>
export declare const github__public_key__insert:Be<Promise<void>>
export declare const [
	github__repo$_,
	github__repo_,
	github__repo__set,
]:be_sig_triple_T<string|undefined>
export declare const [
	github__clone_strategy$_,
	github__clone_strategy_,
	github__clone_strategy__set,
]:be_sig_triple_T<'git'|'https'>
export declare const github__repo__refresh:Be<Promise<void>>
