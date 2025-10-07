# Threat Actors
- <u>Threat Actors</u>: the entity responsible for an event that has an impact on the safety of another entity
    - They can be internal or external
    - They can be funded or have no money with no/little resources
    - They can be sophisticated (knows exactly what they're doing) or know little (i.e. runs a script by accident)
    #### Motives for Actors
    1. Data exfiltration
    2. Espionage
    3. Service disruption
    4. Blackmail
    5. Financial gain
    6. Philosophical/political beliefs - acting based on personal or group beliefs commonly seen with hacktivists 
    7. Ethical - acting on perceived ethical obligations, sometimes seen with whistleblowers or white hat hackers identifying vulnerabilities
    8. Revenge
    9. Disruption/chaos
    10. War

    - <u>Nation states</u>: external entity like government and national security
        - Can have multiple motivations
        - Can perform constant attacks because of their large amounts of resources
        - Can be highly sophisticated attacks
    
    - <u>Unskilled attackers</u>: runs pre-made scripts without any knowledge of what's really happening
        - Motivated by disruption or philosophical reasons
        - Can be internal or external
        - Not really sophisticated attacks
        - Not a lot of funding
    
    - <u>Hacktivist</u>: hacker with a purpose
        - Usually external but could be internal
        - Attacks can be really sophisticated
        - Limited funding
    
    - <u>Insider Threat</u>: someone within an organization taking advantage of their knowledge of the organization to perform attacks
        - Extensive resources since they use the organizations resources
        - Medium level of sophistication. 
        - They excel in knowing know where the vulnerabilities are
 
     - <u>Organized Crime</u>: professional criminals
        - Very sophisticated
        - Organized
        - Lots of funding
    
    - <u>Shadow IT</u>: an individual or department that works around the rules of a organization either knowingly or unknowingly (i.e. An employee storing sensitive data on their personal Google drive since its easier)
        - This type involves building their own infrastructure
        - Limited resources
        - Medium level of sophistication

 ![alt text](image-6.png)


# Common Threat Vectors
- <u>Threat vectors</u>: method used by the attacker to gain access or infect a target
    1. Message Based
        - I.E. Emails, SMS
        - Phishing attacks
        - Social engineering can be done through this vector (i.e. invoice scams, crypto currency scam)
    2. Image based
        - Embedding malicious code in an SVG, PNG, or JPG file. The code is used to describe an image which is how an HTML injection or JavaScript attack code occurs
        - Browsers must provide input invalidation to prevent certain image type
    3. File based
        - Files don't necessarily need to be executed to affect a system. The file can contain malicious code that will perform malicious actions without being executed
        - Adobe PDF, ZIP or any compression type file can contain malicious code
    4. Voice call
        - Vishing
        - Spamming over the phone is common attack
    5. Removable device
        - USBs
        - Use air gapped networks
    6. Vulnerable software
        - Software with vulnerabilities where patches haven't been used
        - Need constant updates
        - Agentless involves using the internet to connect to the resource (s) you need and the attacker infecting your host through that service provider (i.e. AWS)
    7. Unsupported systems
        - Outdated or old systems
        - Check with the manufacturer about any patches
    8. Unsecure networks
        - Ensure the latest and most secure tools are used to secure a network (i.e. 802.1x for authentication on a wired network)
    9. Open service ports
        - An open port is an opportunity for an attacker
        - Every app has their own open port
        - Firewall rules can reduce the number of attacks to a system
    10. Default credentials
        - Basic and common credentials
        - Change credentials often
    11. Supply chain
        - 3rd party hardware is tampered with


# Phishing
- <u>Phishing</u>: cyberattack where attackers send fraudulent emails or messages pretending to be from reputable sources to trick individuals into revealing sensitive information such as usernames, password, credit cards details, etc.

- <u>Vishing</u>: voice phishing involves attackers using phone calls to impersonate legitimate organizations or individuals to trick victims into providing personal information such as credit card numbers or social security numbers

- <u>Smishing</u>: SMS phishing involves attackers sending fraudulent text messages that appear to come from reputable sources. These messages often contain links or phone numbers that lead to phishing websites or prompt the victim to provide personal information

<u>Pretexting<u>: lying. The attacker creates a fake realistic scenario to lure a victim in

# Impersonation
- The goal is to extract information without the victim realizing it
- An attacker can also steal someone's identity. They can use the victims identity to perform credit card, bank, loan or government fraud

    #### Protection
    - Never volunteer information
    - Don't disclose personal details
    - Always verify before revealing info
    - Verification should be encouraged


# Water Hole Attacks
- <u>Water Hole Attack</u>: an attack where attackers compromise a specific website or set of websites that are frequently visited by a particular group, organization, or industry. The goal is to infect the visitors of these sites with malware
    
    #### Protection
    - Defense in depth
        - You need to have layers of security
    - Firewalls and IPS
        - Stop the network traffic before things get bad
    - Anti-virus/Anti-malware signature updates


# Other Social Engineering Attacks
- Spreading misinformation through advertisements, social media, etc. in order to cause confusion and division
- Brand impersonation can be used through pop ups (i.e. "You Won!" message), ads, etc.


# Memory Injections
- <u>Memory Injection</u>: an attack that involves inserting malicious code into the memory space of a legitimate running process. This allows the malicious code to operate with the same privileges as the compromised process
    - Examples: DLL Injection. Since a DLL is a type of process that runs on most computers, it can contain malicious code that's used by the host thus infecting the host

# Buffer overflow
- <u>Buffer Overflow</u>: an attack where the attacker sends more data to a buffer that it can handle which leads to overwriting adjacent memory locations. This potentially can allow the attacker to execute arbitrary code
    - Overflowing data can also cause the application that uses the data to gain elevated privileges


# Race Conditions
- <u>Race Condition</u>: when 2 or more processes try to access or change the same data at the same time and the result depends on which 1 finishes first. This leads to unexpected behavior or security issues
    - <u>Time of Check (TOC)</u>: when the system verifies and extracts the data
    - <u>Time of Use (TOU)</u>: when the system uses the data


# Malicious Updates
- Updating OS and applications can improve security because of patches and bug fixes

    #### Best Practices
    - Always have a known good backup
    - Install from trusted sources
    - Confirm the source
    - Visit the developers site directly
    - Many OS systems will only allow signed apps

- Automatic updates include security checks/digital signatures. They are mostly trustworthy


# OS Vulnerabilities
- OS software is made up of millions lines of code. The more code the higher chance there is a vulnerability

    #### Best Practices
    - Always update OS either monthly or on-demand
    - Test the OS before using (patches might cause problems)
    - Do a reboot
    - Have a backup


# SQL Injection
- <u>SQL Injection</u>: vulnerability where attackers execute malicious SQL statements by manipulating input data
    - It can allow you to view all db information, delete db information, add users, denial of service, etc.
    - Seeing '1=1' is common indication of a SQL injection


# Cross-site Scripting (XSS)
- <u>Cross-site scripting</u>: an attack injecting malicious scripts into web pages to execute in the victim's browser so an attacker can steal or manipulate data

- <u>Persistent (XSS)</u>: placing the malicious code on a popular website where every time a user clicks/uses the website the victim is affected

    #### Protection
    - Be careful when clicking untrusted links
    - Consider disabling JavaScript
    - Keep your browser and applications updated
    - Validate inputs


# Hardware Vulnerabilities
- <u>Firmware</u>: software (OS) running inside the hardware device
    - Vendors are the only ones who can fix their hardware


# Virtualization Vulnerabilities
- VM Escape
    - It is possible to escape a VM and interact with the host OS or hardware. Escaping a VM would mean you have access to the host and control other guest VMs (huge exploit)

    - A hypervisor manages the relationship between physical and virtual resources (i.e. RAM, storage space, CPU, availability, etc.). These resources can be reused between VMs (a hypervisor can support 3 VMs with 2 GB of RAM each). Data can accidently be shared between VMs and overwritten

- <u>Resource Reuse</u>: a vulnerability exploiting shared CPU resources to access or modify data between VMs


# Cloud-specific Vulnerabilities
- DDoS attacks
- Weak or faulty authentications
- Faulty configurations putting data at risk (directory traversal)
- Taking advantaged of unpatched systems

    #### Common Attacks
    - Web app attacks
    - XSS
    - <u>Out of bounds write</u>: writing to unauthorized memory areas
    - SQL injections


# Supply Chain Vulnerabilities
- These vulnerabilities are any weak points within the entire supply chain process. Either when getting raw materials, dealing with consumers and every step in between. 

    #### Vulnerabilities
    - Service providers
        - Service providers can be network, utility, office cleaning, payroll/accounting, cloud services, system administration, etc.
            ### Protection
            - Audits should be conducted often for protection
    - Hardware providers
        - The hardware itself could be compromised
            ### Protection
            - Use small suppliers that you trust and/or have strict control over policies and procedures
    - Cisco products
        - Since everything runs through switches and routers, Cisco products have been copied and sold. These products are counterfeit
    - Software providers
        - Installing any type of software is risky
            ### Protection
            - Digital signatures should be confirmed during installation
            - Even open source software isn't 100% safe


# Misconfiguration Vulnerabilities
- Not configuring any or the right permissions
    - Not configuring a password when logging when using a service 
- Unsecured admin accounts
    - Being able to access accounts easily
        ### Protection
        - Use sudo or su command to disable direct login to root accounts
        - Ensure there few accounts with root account access
- Insecure protocols
    - Using the insecure protocols (i.e. HTTP) and not the secure ones (i.e. HTTPS)
        ### Protection
        - Use packet captures to view everything sent over the network

- Using default settings

- Open ports and services
    - When using a service on a network, it will open ports thus port management is important
     ### Protection
     - Always test and audit to limit number of open ports


# Mobile Device Vulnerabilities
- <u>Jailbreaking/rooting</u>: replacing the existing OS
    - You don't have access to the OS
- <u>Sideloading</u>: installing software or apps without using an app store
    - Prevent this by using the app store

# Zero-day Vulnerabilities
- <u>Zero-day</u>: a newly discovered vulnerability that has no solution or method to fix it
    - This results in a race to exploit the vulnerability or create a patch


# An Overview of Malware
- <u>Malware</u>: software that is performing bad things on a system
    - Malware can
        - Gather information using keystrokes
        - Showing advertising to get money
        - Viruses or worms that infect a system

    - Malware Types and Methods
        - Viruses
        - Worms
        - Ransomware
        - Trojan Horse
        - Rootkit
        - Keylogger
        - Spyware 
        - Bloatware
        - Logic bomb
    - Malware usually appears due to a combination of these types

- <u>Ransomware</u>: when an a attacker gets a victims information and encrypts it. The victim can only access it if they do what the attacker says such as pay them money
    - The OS will still work so the victim can see the messages from the attacker

    #### Prevention
    - Backups should be offline so the attacker can not access it
    - Keep the OS up to date
    - Keep apps up to date
    - Keep anti-virus/anti-malware signatures up to date
    - Keep everything up to date

<u>Trojan</u>: type of malware that disguises itself as legitimate software to deceive users into installing it. Once installed it will perform malicious actions

# Viruses and Worms
- <u>Virus</u>: malware that needs to be attached to a legitimate file or program in order to spread and replicate itself. Replication requires user interaction (i.e. opening an infected file)
    - Reproduces through file systems and networks
    - May or may not cause problems
    - Simple actions like running a program can spread a virus

- <u>Worms</u>: malware that replicates itself without needing to be attached to a file or program.
    - They reproduce through the network and at the speed of the network


# Spyware and Bloatware
- <u>Spyware</u>: malware that spies on you
    - It can trick you into installing malicious software
    - The browser will monitor you
    - A keylogger captures your keystrokes

    #### Prevention
    - Maintain anti-virus/anti-malware
    - Always know what you're installing
    - Run scans
    - Have backups


- <u>Bloatware</u>: unnecessary apps installed by the manufacturer
    - You don't get a choice since the manufacturer installs it
    - The apps use valuable storage space that could open your system to exploits
    - The system may be slower than expected


# Other Malware Types
- Keylogging
- <u>Logic bomb</u>: malicious code of software program intentionally inserted into a system to execute a harmful action when certain conditions are met (i.e. If a user doesn't type anything for X minutes, delete all files on the system)
    ### Prevention
        - Have a set of processes and procedures
        - Have electronic monitoring
        - Constant auditing
- <u>Rootkit</u>: malware designed to gain and maintain admin level access to a computer system while remaining hidden from users and security software. They operate at the OS level making them difficult to detect and remove.
    - You can use a remover specific to rootkits to remove one
    ### Removing a Rootkit
    - Anti-malware scans
    - Use remover specific to the rootkit
    - Secure boot with UEFI


# Physical Attacks
- Brute force
- RFID cloning (i.e. duplicate access badges)
- Environmental attacks (i.e. turning the power off)

<u>RFID Cloning</u>: when an attacker copies the signal/data from a RFID item (i.e. badge, card, etc.) and uses it to create a duplicate

# Denial of Service
- <u>Denial of Service</u>: an attack from a single source that tries to make a system, service, or network unavailable by overwhelming it

- <u>DDOS</u>: an attack from many compromised computers (aka botnet) that tries to make a system, service, or network unavailable by overwhelming it

- <u>Reflected DDOS</u>: when a attacker sends traffic to the server and spoofs the IP making it think the victim sent the request. The server then responds to the victim with a lot of unwanted traffic

- <u>Amplified DDOS</u>:when a attacker sends traffic to the server and spoofs the IP making it think the victim sent the request. The server then responds with way more traffic then was originally sent. The victim now is receiving a significant increase in traffic
    - All amplified attacks are reflected attacks but not all reflected attacks are amplified attacks 


# DNS Attacks
- <u>DNS Attacks</u>: An attack that targets DNS servers to redirect users, disrupt services or steal data
    - This is called domain poisoning/spoofing.
    - <u>URL Hijacking</u>: registering a domain name that looks like a legitimate one to trick users into visiting it
        - AKA typo squatting/ brandjacking
    - <u>Domain Hijacking</u>: when an attacker takes control of an entire domain name by stealing credentials, exploiting vulnerabilities or tricking the registrar into transferring ownership 

# Wireless Attacks
- <u>DeAuthentication Attack</u>: A DOS attack that takes people that are working on the wireless network and disconnects them from any connectivity over that network
    ### Prevention
    - Enable/use 802.11w
    - Use IPS/IDS
    - Use WPA3 

- <u>Radio frequency (RF) jamming</u>: transmitting interfering wireless signals preventing other nearby devices from connecting to access points


# On-path Attacks
- <u>On-path Attack (aka man in the middle)</u>: an attacker watching traffic move between 2 locations without either location knowing the attacker is watching
    - The attacker redirects the traffic. They can alter the communication without either requestor or recipient knowing.
![alt text](image-8.png)


# Replay Attacks
- <u>Replay Attack</u>: an attacker intercepts a request, holds it and then sends it pretending to be the legitimate user
    ![alt text](image-7.png)
    - An attacker could use this attack to get a users cookies
      - <u>Session hijacking (side jacking)</u>: an attack in which an attacker attempts to impersonate the user by using their session token
        - With stolen cookies, the attacker can pose as the user
      ![alt text](image-9.png)
      #### Prevention
      - Encrypt everything (end to end encryption)
      - Encrypt over the network


# Malicious Code
- Attackers can insert malicious code into a system that works fine and leverage it to get information
    #### Examples
    - WannaCry ransomware
    - British Airways XSS
    - Estonian Central Health Database (SQL Injection)


# Application Attacks
- Injection Attacks (i.e. SQL Injection)
- Buffer overflows
- Replay Attacks
- <u>Privilege Escalation</u>: gain higher level access to a system
    #### Prevention
    - Patch vulnerabilities 
    - Update anti-virus/anti-malware
    - Randomize the locations of where data can be placed
    - Limit the locations data is able to be ran
- <u>Cross-site requests</u>: when a web request is made from one origin (site) to another (i.e. loading a YouTube video on a page)
    - <u>Cross-site request forgery</u>: when a attacker tricks a victim's browser into sending a request to another site where the victim is already logged in. It exploits the trust a website has in a user's browser session to execute unintended actions
    ![alt text](image-10.png)  

- <u>Directory Traversal</u>: a web server vulnerability that lets an attacker have access to files and directories outside the web root folder by manipulating file paths (i.e. " ../ " )    
    - Its not an attack but it is a web server vulnerability


# Cryptographic Attacks
- <u>Birthday attack</u>: a cryptographic attack that takes advantage of the chance that two different inputs can create the same hash value
    - The attackers attack the algorithms (i.e. SHA-256) in order to see how well they work
    - <u>Collision</u>: when 2 plain text files have the same hash when encrypted
- <u>Downgrade attack</u>: forcing a system to use a weaker, older, or less secure protocol or encryption method making it vulnerable to exploits
    - SSL stripping (combines a downgrade attack and on-path attack)  
    ![alt text](image-12.png)


# Password Attacks
- Hashing a password is a 1 way trip. You can not deconstruct the password after its been hashed

- <u>Spraying attack</u>: a type of brute force attack where an attacker attempts a small list of commonly used passwords against many different usernames to gain unauthorized access
    - Since these accounts have weak passwords the odds of guessing correctly are high. The attacker will eventually move onto the next vulnerable account. 
    - They will also prevent any lockouts, alarms or alerts from going off.

- <u>Brute force</u>: try every possible password combination until the hash is matched


# Indicators of Compromise (IOC)
- Account lockout
- Session usage (i.e. using an app in different location at the same time)
- Blocked Content
- Impossible travel (i.e. login in/out in different locations within a short time period)
- Resource consumption (i.e. firewall logs show outgoing transfers)
- Resource inaccessibility (i.e.a server is down because a attacker tried to look for an exploit)
- Out of cycle logging (i.e. logs contain events that happen outside of normal hours)
- Missing logs (i.e. attackers delete log information to cover tracks)
- Published documents (i.e. posting PII online)


# Segmentation and Access Control
- Segmenting/separating a network in physical, logical or virtual parts can improve security and performance.

    - <u>Access Control List (ACL)</u>: set of rules that define what a device or user can access once they're on the network
        - It can be used to restrict access to network devices through the use of limited IP addresses or other ID
        - Example:  
        ![alt text](image-13.png)
        - Many OS systems use ACLs to provide access to files

    - Application allow/deny lists
        - <u>Allow List</u>: grants permissions to whats on the list. Everything else is implicitly denied. (very restrictive)
        - <u>Deny List</u>: denies permissions to whats on the list. Everything else is implicitly allowed others (i.e. anti-virus and anti-malware)


# Mitigation Techniques
- Mitigation techniques limit the impact during or after an attack
    - Prevent an attack from happening patching
    - Limit the amount of data files an attacker can get using encryption
    - Constant monitoring
    - Practice least privilege
    - Apply specific security settings to a system (i.e. configure settings so only admins can install software on company laptops)
    - Dispose items properly and follow proper procedures (i.e. destroying a device,)


# Hardening Techniques
- Harden techniques reduce the attack surface before an attack happens
    - <u>System Hardening</u>: securing OS software, apps, and network devices
        - Constant updates
        - Ensure user accounts are secured like having password policies
        - Limit who has access to the network
        - Use some anti-virus, anti-malware or endpoint detecting tool
    - Encryption
        - Use Full disk encryption (FDE) encrypts everything on a drive
        - Use a VPN for communicating over the network
    - Have multiple layers of security for all access points
    - Use an EDR
    - Have host based firewalls
        - Focuses on allowing and disallowing traffic 
        - The firewall runs on each individual system but can managed from one location
    - Use Host-based Intrusion Prevention Systems to detect and block attacks
        - <u> Host-based Intrusion Prevention System (HIPS)</u>: tool installed on a computer (host) that monitors the system in real time for suspicious behavior. If it detects something it can block or stop it immediately
        - Its usually built into a EDR or anti-malware software
    - Close or control open ports
        - Use a NGFW to control access
    - Change default settings especially passwords
        - Add MFA
    - Remove unnecessary software
        - All apps have a different patch so removing unused software is the best and easiest solution