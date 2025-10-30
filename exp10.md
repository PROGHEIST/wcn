Perfect — you’re asking about configuring Path Vector Routing using BGP (Border Gateway Protocol) 👏

Let’s go step-by-step on how to configure BGP using GUI in Cisco Packet Tracer (no CLI).


---

🌐 Goal

Configure BGP (Path Vector Protocol) between two routers that simulate two different Autonomous Systems (AS) using GUI (not CLI).


---

🧩 Topology Example

We’ll use:

Device	AS Number	Network	Connected Device

Router0	65001	192.168.1.0/24	Router1
Router1	65002	192.168.2.0/24	Router0


And PCs to test communication.


---

⚙️ Step-by-Step BGP Configuration using GUI

🖥️ Step 1: Add Devices

1. Open Cisco Packet Tracer.


2. Drag:

2 Routers (e.g., 2811)

2 Switches

2 PCs



3. Connect them as follows:

PC0 → Switch0 → Router0

PC1 → Switch1 → Router1

Router0 ↔ Router1 (use Serial or GigabitEthernet link)





---

🔌 Step 2: Connect Devices

Use Copper Straight-Through cables for PCs & Switches.
Use Serial Cable (DCE) between routers.


---

🖧 Step 3: Assign IP Addresses

Device	Interface	IP Address	Subnet Mask	Description

Router0	G0/0	192.168.1.1	255.255.255.0	LAN side
Router0	S0/0/0	10.0.0.1	255.255.255.252	Link to Router1
Router1	G0/0	192.168.2.1	255.255.255.0	LAN side
Router1	S0/0/0	10.0.0.2	255.255.255.252	Link to Router0


PC0: IP 192.168.1.2, Gateway 192.168.1.1
PC1: IP 192.168.2.2, Gateway 192.168.2.1


---

⚙️ Step 4: Configure IPs in GUI

No CLI Needed:

1. Click Router0 → Config tab


2. Select GigabitEthernet0/0

Set IP = 192.168.1.1, Mask = 255.255.255.0

Click On



3. Select Serial0/0/0

Set IP = 10.0.0.1, Mask = 255.255.255.252

Click On



4. Repeat for Router1, with:

G0/0: 192.168.2.1

S0/0/0: 10.0.0.2





---

🌍 Step 5: Configure BGP in GUI

1. On Router0 → Config tab → Routing → BGP


2. Enter:

AS Number: 65001

Under BGP Neighbors:

Neighbor IP: 10.0.0.2

Remote AS: 65002

Click Add


Under Networks:

Network: 192.168.1.0

Mask: 255.255.255.0

Click Add




3. On Router1 → Config → Routing → BGP

AS Number: 65002

Neighbor IP: 10.0.0.1

Remote AS: 65001

Network: 192.168.2.0

Mask: 255.255.255.0





---

🔁 Step 6: Verify Connectivity

1. Wait a few seconds for BGP session to establish.


2. Go to PC0 → Command Prompt, and type:

ping 192.168.2.2


3. If you get replies ✅ → BGP Path Vector routing is configured successfully!




---

🧠 Concept Recap: Path Vector (BGP)

BGP is a path vector protocol (used on the Internet).

Each router advertises routes with AS Path info.

Prevents loops by checking if its AS number appears in the AS path.



---

🔍 Summary

Router	AS	Advertised Network	Neighbor	Neighbor AS

R0	65001	192.168.1.0/24	10.0.0.2	65002
R1	65002	192.168.2.0/24	10.0.0.1	65001



---

Would you like me to create a .pkt file showing this full BGP Path Vector configuration (done using GUI only)?
I can generate and give you the ready simulation file.
