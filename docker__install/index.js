import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { ssh } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
export const docker__install = be_(ctx=>run(async ()=>{
	// If Docker fails to start, a reboot may be needed
	// See https://stackoverflow.com/questions/72117335/docker-installation-issue-failed-to-mount-overlay-no-such-device-storage-driv
	// language=sh
	await ssh(ssh_url_(ctx))`
			sudo pacman -S docker docker-compose docker-buildx --noconfirm
			sudo groupadd -f docker
			sudo mkdir -p /etc/docker
			sudo groupadd docker
			sudo usermod -aG docker $USER
			newgrp docker
			sudo systemctl enable docker
			sudo systemctl start docker.service
		`
}))
