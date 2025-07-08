# Security Controls
<u>Technical Controls</u>: controls implemented using systems (i.e. OS system controls, firewalls, antivirus)

<u>Managerial Controls</u>: administrative controls associated with security design and implementation (i.e. security policies, SOPs)

<u>Operational Controls</u>: controls implemented by people instead of systems (i.e. security guards, awareness programs)

<u>Physical Controls</u>: controls that limit physical access (i.e. guard shack, fences, locks, badge readers)

#### Control Types
<u>Preventive</u>: block access to a resource  
<u>Deterrent</u>: discourage an intrusion attempt. Makes an attacker think twice  
<u>Detective</u>: identify and log an intrusion  
<u>Corrective</u>: apply a control after an event has been detected. You can reverse the impact of an event  
<u>Compensating</u>: control using other means. Its a temporary solution used to makeup the lack of resources you currently have  
<u>Directive</u>: direct a subject towards a security compliance. Its pretty weak security control since it relies on the subject to make the decision
![alt text](image.png)


# CIA Triad
<u>Confidentiality</u>: certain information should only be known to certain people. You prevent disclosure of information to unauthorized individuals 

<u>Integrity</u>: data is stored and transferred as intended. Any modification to the data would be identified

<u>Availability</u>: information is accessible to authorized users


# Non-repudiation
<u>Non-repudiation</u>: proof that an action or transaction occurred and that the sender cannot deny having performed it

- To prove the integrity of data, hashing can be used. It represents the data as a short string of text. If the data changes so will the hash. If the hash changes, it indicates the data has bee compromised

- Prove the message was not changed = Integrity  
- Prove the source of the message = Authentication  
- Make sure the signature is not fake = Non-repudiation


# Authentication, Authorization, & Accounting
 - Identification = this is who you claim to be  

 - Authentication = prove you are who you say you are  
    - You can authenticate a device using digital signatures. This is done using certificates that other organizations rely on
        - The certificate authority is how certificates are signed and are maintained by the organization. It validates the certificate.

 - Authorization = based on identification and authentication what can access do you have?
    - An authorization model is used to grant access to users and services (i.e. groups, roles, etc.) 

 - Accounting = resources used include login time, data & received, logout time


# Gap Analysis
<u>Gap Analysis</u>: compare where you are with where you want to be  


# Zero Trust
<u>Zero Trust</u>: framework that assumes no one inside or outside a network should be automatically trusted. It emphasizes verifying every user and device, regardless of location, before granting access to resources

- You can apply Zero Trust framework by splitting the network into functional components/planes
    - <u>Data Plane</u>: process the frames, packets and network data (i.e. processing, forwarding, trunking, encrypting, NAT)
    - <u>Control Plane</u>: manages the actions of the data plane (i.e define policies & rules, routing tables, session tables, NAT tables)

- You can control trust within a network by:
    1. <u>Adaptive Identity</u>: security approach that dynamically adjusts security measures based on the level of risk associated with a user's login attempt (i.e. a user requesting access to a resource located in the U.S.from China)
    2. <u>Threat scope reduction</u>: decrease the number of entry points  
    - Combining these 2 results in policy driven access control

#### Zero Trust Policy Plane
![alt text](image-1.png)


# Physical Security
- Barricades/bollards, moats, etc.
- <u>Access control vestibules</u>: room where doors are unlocked/locked in order to keep others out
- Fences
- Video surveillance
- Security guards
- Lighting
- Sensors


# Deception and Disruption
- <u>Honeypot</u>: its a decoy meant to attract and trap cyber attacks allowing professionals to study their tactics and tools

- <u>Honeynet</u>: 1 or more honeypots meant to make a network look more real

- <u>Honeyfile</u>: create files with fake information

- <u>Honeytokens</u>: traceable data added to a honeynet in order to see who accessed a network
