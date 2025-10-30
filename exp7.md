Great question 👍 Let’s go step-by-step on how to configure a network using GUI (not CLI) in Cisco Packet Tracer, with 4 PCs, 2 switches, and 1 router.


---

🎯 Objective

Connect 4 PCs through 2 switches and 1 router using GUI only (no command line).


---

🧩 Network Setup Overview

Devices:

4 PCs → PC0, PC1, PC2, PC3

2 Switches → Switch0, Switch1

1 Router → Router0


Connections:

PC0 and PC1 → connect to Switch0

PC2 and PC3 → connect to Switch1

Switch0 and Switch1 → connect to Router0 (each on different interfaces)



---

⚙️ Step-by-Step Configuration Using GUI

🖥️ Step 1: Place Devices

1. Open Cisco Packet Tracer.


2. From the bottom device list:

Drag 4 PCs (End Devices → PC)

Drag 2 Switches (Switches → 2960)

Drag 1 Router (Routers → 2901 or 1841)



3. Arrange them neatly.




---

🔌 Step 2: Connect Devices with Copper Cables

1. Click the Lightning icon (Connections).


2. Choose “Copper Straight-Through” cable.


3. Connect as follows:

PC0 → Switch0 (FastEthernet0/1)

PC1 → Switch0 (FastEthernet0/2)

PC2 → Switch1 (FastEthernet0/1)

PC3 → Switch1 (FastEthernet0/2)

Switch0 → Router0 (GigabitEthernet0/0)

Switch1 → Router0 (GigabitEthernet0/1)





---

🖧 Step 3: Assign IP Addresses to PCs

1. Click PC0 → Desktop tab → IP Configuration

IP Address: 192.168.1.2

Subnet Mask: 255.255.255.0

Default Gateway: 192.168.1.1



2. Repeat for PC1 with 192.168.1.3


3. For PC2 → 192.168.2.2, Gateway: 192.168.2.1


4. For PC3 → 192.168.2.3, Gateway: 192.168.2.1




---

🌐 Step 4: Configure Router Interfaces (using GUI only)

1. Click Router0 → Config tab.


2. On the left panel, select GigabitEthernet0/0.

Check “On” (to enable interface)

Set IP Address: 192.168.1.1

Subnet Mask: 255.255.255.0



3. Select GigabitEthernet0/1.

Check “On”

Set IP Address: 192.168.2.1

Subnet Mask: 255.255.255.0



4. Click Save or just close the router window.




---

🔁 Step 5: Verify Connections

1. Wait till all link lights turn green (might take a few seconds).


2. Click PC0 → Desktop → Command Prompt.


3. Type:

ping 192.168.2.2

(to ping PC2 across router)



✅ If replies come — network is configured successfully using GUI only!


---

🧠 Summary of IP Plan

Device	Interface	IP Address	Subnet Mask	Gateway

PC0	FA0	192.168.1.2	255.255.255.0	192.168.1.1
PC1	FA0	192.168.1.3	255.255.255.0	192.168.1.1
PC2	FA0	192.168.2.2	255.255.255.0	192.168.2.1
PC3	FA0	192.168.2.3	255.255.255.0	192.168.2.1
Router0	G0/0	192.168.1.1	255.255.255.0	—
Router0	G0/1	192.168.2.1	255.255.255.0	—



---

Would you like me to create a .pkt simulation file for this setup (GUI-configured only)?
I can generate and give you the download link directly.
