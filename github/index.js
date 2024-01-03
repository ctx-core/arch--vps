import { be_ } from 'ctx-core/be'
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { run } from 'ctx-core/run'
import { ssh } from 'zx'
import { app_name_ } from '../app/index.js'
import { bashrc__upload } from '../bashrc/index.js'
import { git__install } from '../git/index.js'
import { git_lfs__install } from '../git_lfs/index.js'
import { ssh_key__generate } from '../ssh_key/index.js'
import { ssh_url_ } from '../ssh_url/index.js'
import { work__mkdir } from '../work/index.js'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/** @type {undefined} */
let _undefined
export const [
	github__public_key$_,
	github__public_key_,
	github__public_key__set
] = be_sig_triple_(()=>_undefined)
export const github__public_key__insert = be_(ctx=>run(async ()=>{
	console.log('github__public_key__insert')
	await ssh_key__generate(ctx)
	// see https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints
	// language=sh
	await ssh(ssh_url_(ctx))`
		if ! ls ~/.ssh/known_hosts || grep -L ${github__public_key_(ctx)} ~/.ssh/known_hosts; then
			echo github.com ssh-ed25519 ${github__public_key_(ctx)} >> ~/.ssh/known_hosts
		fi
	`
}))
export const [
	github__repo$_,
	github__repo_,
	github__repo__set,
] = be_sig_triple_(()=>_undefined)
export const [
	github__clone_strategy$_,
	github__clone_strategy_,
	github__clone_strategy__set,
] = be_sig_triple_(()=>'git')
export const github__repo__refresh = be_(ctx=>run(async ()=>{
	console.log('github__repo__refresh')
	await bashrc__upload(ctx)
	await work__mkdir(ctx)
	await git__install(ctx)
	await git_lfs__install(ctx)
	await ssh_key__generate(ctx)
	await github__public_key__insert(ctx)
	// language=sh
	await ssh(ssh_url_(ctx))`
		cd work
		if [ ! -d ${app_name_(ctx)} ]; then
			git clone git@github.com:${github__repo_(ctx)}.git
		fi
		cd ${app_name_(ctx)}
		git fetch
		git rebase
		git submodule init
		git submodule update
		git lfs install
		git lfs fetch
		git lfs checkout
	`
}))
