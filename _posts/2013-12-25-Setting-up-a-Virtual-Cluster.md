# Virtual Cluster

When playing around with distributed technologies like hadoop or
databases, it becomes at some point important to have a number of
machines available to perform tests in a truly distributed
environment. In this note I am going to explain how to setup a virtual
cluster using virtual box, so that you can simulate such an environment
on a single laptop.

## Target Network Configuration

Each host has two network interfaces.

* Adapter 1: Host Only Interface. This is a virtual network used to
  connect the virtual hosts and the physical host system.
* Adapter 2: NAT. Used to connect the virtual hosts to the internet.

Network Setup Sketch:

                         vboxnet0  inet
						 
                                  [GW]
     HOST:                          |
          [wlan0|auto,NAT]----------+
          [vboxnet0|.1]-----+       |
                            |       |
     VLB1:                  |       |
	      [eth0|auto]-------|-------+
	      [eth1|.101]-------+       |
                            |       |
     VLB2:                  |       |
	 	  [eth0|auto]-------|-------+
	      [eth1|.102]-------+


## VM Setup

1. Create a new virtual machine  
   I used the following specs:
   - 1Gb Memory
   - 5Gb Disk (dynamically allocated)
   - two network adapters as described above.
2. Install linux.  
   I used Ubuntu 12.04 Server.
   Update packages and install basic tools (e.g. `openssh, emacs`)
3. Network configuration  
   Enable dhcp on both network interfaces in `/etc/network/interfaces`.
4. Setup ssh access.  
   I like to be able to get a remote shell by simply typing `ssh <hostname>`.
   Use `.ssh/config` to set the default user name (user), and copy the ssh key
   as described e.g. at https://help.ubuntu.com/community/SSH/OpenSSH/

        cat ~/.ssh/id_rsa.pub | ssh VLB "cat >> .ssh/authorized_keys"

Excerpt from `/etc/network/interfaces` on the virtual hosts:

    auto eth0
    iface eth0 inet dhcp

    auto eth1
    iface eth1 inet dhcp

Excerpt from `~/.ssh/config` on the hosts:

    Host VLB
    HostName 192.168.56.101
    User user

## Cloning

Before shutting down the root VM for cloning execute the following
command on the shell:

    sudo rm -f /etc/udev/rules.d/70-persistent-net.rules

This will erase the network card configuration.  Now shutdown the VM
and clone the virtual machine in virtual box. Select 'Reinitialize the
MAC addresses of all network cards'.

We need different mac addresses to have both cards in the same
network. As a result the linux kernel will detect the network cards as
new interfaces and give them new names (`eth1`, `eth2`) - and not be
automatically activated and configured on boot.

## Hostnames and SSH Config

First adapt your `~/.ssh/config` and `etc/hosts` to list both machines
as `VLB1` and `VLB2`.  Then cofigure the remote hostnames:

    echo "VLB1" | ssh VLB1 "cat | sudo tee /etc/hostname"
    echo "127.0.0.1 VLB1" | ssh VLB1 "cat | sudo tee -a /etc/hosts"

Similarly for VLB2.

Remark: A drawback of this approach is that each time the 2nd command
is executed a new line is appended at to /etc/hosts. In particular the
command is not idempotent. An alternative variant would be to use
`sed` for a global string replacement, which has similar issues. `sed
s/VLB/VLB1/g` transforms `VLB -> VLB1 -> VLB11`. Maybe `sed
s/VLB$/VLB1/g` could work.

Also it would be nice to set /etc/hosts correctly on the remote, but
this gets too far. It seems [zookeper](http://zookeeper.apache.org/)
is the right tool for this kind of problems.

## Network check

To see if all hosts are sucessfully connected to the network, run a
ip-range scan. E.g.

    nmap 192.168.56.*

You should see three machines at `.1`, `.101`, `.102`.

## Startup Script

Convenience script to start the whole "cluster" at once:

    #!/bin/bash
	nohup vboxheadless -s LinuxBox &
	nohup vboxheadless -s LinuxBox_1 &


# References

* [D. Thiebaut - Setup Virtual Hadoop Cluster under Ubuntu with VirtualBox](http://cs.smith.edu/dftwiki/index.php/Setup_Virtual_Hadoop_Cluster_under_Ubuntu_with_VirtualBox
)
