# @ctx-core/arch--vps

## 0.3.2

### Patch Changes

- version bump

## 0.3.1

### Patch Changes

- pacman\_\_rm_lck: fix: sudo

## 0.3.0

### Minor Changes

- lib:

      + openssh__install
      + ssh_key__name$_
      + ssh_key__name_
      + ssh_key__name__set
      + ssh_key__passphrase$_
      + ssh_key__passphrase_
      + ssh_key__passphrase__set
      + ssh_key__type$_
      + ssh_key__type_
      + ssh_key__type__set

- ssh_key**scp→ssh_key**generate: generates the ssh key on the vps over ssh

## 0.2.2

### Patch Changes

- ssh_url: fix: user@host

## 0.2.1

### Patch Changes

- dotenv\_\_scp: fix: export type

## 0.2.0

### Minor Changes

- lib:

      + app_name$_
      + app_name_
      + app_name__set
      + dotenv$_
      + dotenv_
      + dotenv__set
      + dotenv__scp

### Patch Changes

- fix: export \*.js files

## 0.1.1

### Patch Changes

- fix: scp files:

      bashrc__scp
      sshd_config__scp

  - ./fs

## 0.1.0

### Minor Changes

- initial version:

      + base_devel__install
      + bashrc__scp
      + direnv__install
      + docker__install
      + git__install
      + git_lfs__install
      + github__public_key__add
      + github__public_key$_
      + github__public_key_
      + github__public_key__set
      + github__public_key__insert
      + inetutils__install
      + lsof__install
      + nvm__install
      + pacman__rm_lck
      + run_id$_
      + run_id_
      + run_id__set
      + ssh_host$_
      + ssh_host_
      + ssh_host__set
      + ssh_key__scp
      + ssh_keygen__comment$_
      + ssh_keygen__comment_
      + ssh_keygen__comment__set
      + ssh_url$_
      + ssh_url_
      + ssh_user$_
      + ssh_user_
      + ssh_user__set
      + sshd_config__scp
      + tig__install
      + vim__install
      + wget__install
      + which__install
      + work__mkdir
      + yay__install
      + yay__update
