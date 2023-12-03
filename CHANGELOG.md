# @ctx-core/arch--vps

## 0.10.1

### Patch Changes

- bun\_\_install: fix: implementation

## 0.10.0

### Minor Changes

- changes:

      + bun__version$_
      + bun__version_
      + bun__version__set
      + bun__install

## 0.9.0

### Minor Changes

- - app\_\_direnv_allow

## 0.8.0

### Minor Changes

- changes:

      + app_path$_
      + app_path_
      + work_path$_
      + work_path_

## 0.7.0

### Minor Changes

- changes:

      + github__repo$_
      + github__repo_
      + github__repo__set
      + github__clone_strategy$_
      + github__clone_strategy_
      + github__clone_strategy__set
      + github__repo__refresh

## 0.6.9

### Patch Changes

- dotenv\_\_upload: fix: implementation

## 0.6.8

### Patch Changes

- fix: implementation:

      bashrc__upload
      dotenv__upload
      sshd_config__upload

## 0.6.7

### Patch Changes

- unlink tempfiles after scp:

      bashrc__upload
      dotenv__upload
      sshd_config__upload

## 0.6.6

### Patch Changes

- @ctx-core/fs: ^1.4.0 -> ^1.4.1
- Updated dependencies
  - @ctx-core/fs@1.4.2

## 0.6.5

### Patch Changes

- ∋ file_exists\_\_waitfor(tempfile_path):

      bashrc__upload
      dotenv__upload
      sshd_config__upload
      ∋ @ctx-core/fs

- Updated dependencies
  - @ctx-core/fs@1.4.0

## 0.6.4

### Patch Changes

- @ctx-core/tempfile: ^1.2.0 -> ^1.2.1

## 0.6.3

### Patch Changes

- ctx-core: ^4.8.1 -> ^4.8.2
- @ctx-core/tempfile: ^1.1.33 -> ^1.2.0

## 0.6.2

### Patch Changes

- write to tempfile & scp:

      bashrc__upload
      dotenv__upload
      sshd_config__upload

## 0.6.1

### Patch Changes

- dotenv\_\_upload: write to .env with over ssh using the cat command

## 0.6.0

### Minor Changes

- dotenv**scp→dotenv**upload

## 0.5.0

### Minor Changes

- lib:

      + bashrc__content$_
      + bashrc__content_
      + bashrc__content__set
      + sshd_config__content$_
      + sshd_config__content_
      + sshd_config__content__set

- bashrc**scp→bashrc**upload:

      upload bashrc__content_(ctx) or default bashrc file in this package
      if bashrc__content__set(ctx, false), then this operation is skipped

- sshd_config**scp→sshd_config**upload:

      upload sshd_config__content_(ctx) or default sshd_config file in this package
      if sshd_config__content__set(ctx, false), then this operation is skipped

## 0.4.0

### Minor Changes

- package name: @ctx-core/arch-vps

## 0.3.6

### Patch Changes

- fix: export

## 0.3.5

### Patch Changes

- console.log in all command functions

## 0.3.4

### Patch Changes

- openssh\_\_install: fix: --noconfirm

## 0.3.3

### Patch Changes

- openssh\_\_install: fix: await promise

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
