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


# Change Management
- <u>Change approval process</u>: formal process for managing changes
    - Typical Process:
        - Complete request form
        - Determine the purpose of the change
        - Identify the scope of the change
        - Schedule a date and time of the change
        - Determine affected systems and the impact
        - Analyze the risk associated with the change
        - Get aproval from the chnage control board
        - Gen end user acceptance after the change is complete

- <u>Owners</u>: individual or entity needs to make a change
    - The owner manages the process but doesn't usually perform actual changes

- <u>Sanbox test</u>: isolated environment used to test and analyze files or chnages


# Technical Change Management
- <u>Allow/deny lists</u>: lists used to determine which applications are allowed or not allowed to work in a environment (i.e. app thats known for having mutiple vulnerabilities)
    - <u>Allow</u>: determines what applications can be ran (its really restrictive)
    - <u>Deny</u>: determines what application can NOT be ran (i.e. anti-virus, anti-malware)
- <u>Change Control Approval</u>: defines exactly which components are covered
    - It doesn't mean you can make any change. Its very specific.
    - Modifications to related components are allowed provided they remain within the defined scope of the approved change


# Public Key Infrastructure
- <u>PKI</u>: system used to grant access to people and systems using public accessible keys

- <u>Symmetric Encryption</u>: a single key used for encryption and decryption.
    - Its sometimes called a shared secret
- <u>Asymmetric</u>: 2 keys where one is for encryption and the other is for decryption
    - Private key = decrypts data
    - Public key (anyone can see this) = encrypts data
    - Anyone with the public key can encrypt and send data to you
    - You can not derive the private key from the public key

- <u>PKI</u>: system used to grant access to people and systems using public accessible keys


# Encrypting Data
- Its possible to encyrpt databases specifically:
    - Encrypting all db information with a smmetric key
    - Encrypting individual columns 

- Larger keys are more secured since they are more complex making it more difficult for attackers to brute force. This applies to symmetric and assymmetric keys

- Weak keys can be strengthened by performing multiple processes. For example, hash a password, hash the hash of the password and so on. This would require the attacker to go spend a lot more time


# Key Exchange
- Keys can be sent to others either ut-of-band or in band
    - Out-of-band exchanges invovle sending keys not within your network (i.e. telephone, courier, in-person, etc.)
    - In-band exchanges invovle sending keys within your network (i.e. asymmetric encryption to deliver symmetric keys)
        - Process of sharing a symmetric session key using asymmetric encryption
            1. Client encrypts a random (symmetric) key with a server's public key
            2. The server decrypts this shared key and uses it to encrypt data (this is the session key)
    - Session keys are temporary and should be unpredictable
    

# Encryption Technologies
- <u>Trusted Platform Module (TPM)</u>: a security chip on a computer's motherboard designed to enhance security by securely storing cryptographic keys. It basically provides encryption for a single device

- <u>Hardware Security Module (TPM)</u>: way to provide encryption for large amounts of data (not just 1 device)

- <u>Key Management System</u>: way to manage all keys in a centralized manager (i.e. AWS Key Management Service)

- <u>Secure Enclave</u>: a physically and logically isolated area within a device that stores and processes sensitive data securely (i.e. encryption keys, passwords, or biometric info). It uses cryptography and hardware level isolation to keep that data safe even if the main system is compromised


# Obfuscation
- <u>Obfuscation</u>: the process of makng something unclear in order to hide data (i.e. hiding information inside an image)
    - Its possibel to read the information if you know how
    - Common Steganography Techniques
        1. Network based: embed messages in TCP packets
        2. Use an image: embed the message in the image itself
        3. Invisible watermarks: yellow dots on printers
    - Theres is also audio and video steganography

- <u>Tokenization</u>: replace sensitive data with a non-sensitive placeholder 
    - Example: SSN=266-12-1112 is now 691-61-8539
    - The token is temporary so an attacker can not use it later
    - There is no encryption or hashing since the sensitive information is replaced
    ![alt text](image-2.png)

- <u>Data Masking</u>: technique used to protect sensitive data by replacing it with fictitious but realistic data. 
    - This ensures data can not be deciphered even if an attacker has gained access to the masked data 
    - Example
    ![alt text](image-3.png)