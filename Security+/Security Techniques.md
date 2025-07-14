# Secure Baselines
- Establish
    - Need to create the baselines. They can be found from manufacturers 
- Deploy
    - Need to put the baselines into action
- Maintain
    - Update the baselines when needed (i.e. updates, new OS, vulnerabilities)


# Hardening Targets
- Mobile devices
    - Updates are critical for bugs and security patches
    - Segmentation can protect data where company and user data are separated

- Workstations
    -  Automate monthly patches
    - Remove software from the device to reduce the chance of a attack (less options = less vulnerabilities)

- Switches
    - Always change the default credentials
    - Check with manufacturer for any security updates as they are the only ones who will know

- Cloud infrastructure
    - Use least privilege 
    - Configure endpoint detection and response (EDR) to make sure that all devices accessing the cloud are secure
    - Always have backups

- Servers
    - Keep updated (i.e. system updates, service packs, security patches)
    - Follow good practices like complex passwords and limit the number of account a user has
    - Limit network access
    - Monitor and secure using anti-virus/anti-malware

- ICS/SCADA
    - Requires extensive segmentation (limited access to them)

- Embedded systems
    - Perform security patches 
    - Segment them and use firewalls

- RTOS
    - Isolate the system from the rest of the network
    - Run these systems with the MINIMUM amount of services (prevents the potential of an exploit)
    - Use secure communication by leveraging host based firewalls

- IoT devices
    - Perform updates ASAP
    - Segmentation from other devices on a network


# Securing Wireless and Mobile
- Site surveys
    - Determine existing wireless landscapes
    - Identify existing access points
    - Layout and plan for interference
    - Perform the site survey often since things change all the time

- Heat maps
    - Good way to visualize wireless signal strength

#### Mobile
- System admins can control devices by using a mobile device management (MDM) since its a centralized way to view all devices in a organization
    -  Lets admin do stuff like lock after a certain amount of time, require a PIN to use, separate information in the device, have the camera turned off all the time, etc.

- <u>Bring your own device (BYOD)</u>: use personal device for personal use and work
    - Difficult to manage since you have to manage personal info and company info

- Corporate-owned, personally
enabled (COPE)
    - Works similar to a BYOD except the organization buys the device for the employee
    - Information is protected using corporate policies 
    - Choose your own device (CYOD) lets a employee decide what device they want to use

- Cellular networks
    - Can be used to monitor traffic or location across the world

- Wi-Fi
    - Susceptible to on-path attacks and DOS attacks

- Bluetooth
    - Susceptible to attacks like WIFI and cellular networks. Be careful to connecting to anything public since anyone can also connect and exploit your device


# Wireless Security Settings
- <u>Wi-Fi Protected Access 3 (WPA3)</u>: protocol used for security on WIFI
    - Galois/Counter Mode Protocol (GCMP) block cipher code is a stronger encryption than the one used on WPA2 

- <u>AAA/Remote Authentication</u>: tracks resources connecting to a network
    - A = Authentication
    - A = Authorization
    - A = Accounting

- <u>IEEE 802.1X</u>: port based network access control (NAC)
    - You don't get access to the network until you authenticate
    - Uses EAP

- Remote Authentication Dial-In User Service (RADIUS)
    - Common AAA protocols
    - Used not only for dial ins


# Application Security
-<u>Input validation</u>: verifies that anything not expected in the input will not be interpreted by the app

- <u>Secure cookies</u>: information stored on your computer by the browser
    - Used for tracking, personalization, session management
    - Sensitive information should not be saved in a cookie

- <u>Static code analysis (SAST) </u>: automatically scanning an application's source code for vulnerabilities before its executed

- <u>Code signing</u>: digitally signing software to verify its authenticity and integrity to make sure it has not been tampered with

- <u>Sandboxing</u>: the application can not access unrelated resources
    - They play in their own sandbox

- You can monitor your application in real time
    - View blocked attacks
    - Audit logs to get more information
    - Anomaly detection (i.e. unusual file transfers, increase in client access)


# Asset Management
- <u>Acquisition/procurement process</u>: purchasing goods and services from third parties

- Assignment/accounting
    - A central asset tracking system tracks all the products received 
    - Ownership
        - First step in a tracking system
        - Associate with a person
    - Classification
        - Type of asset
        - Hardware
        - Software
    - Monitoring/asset tracking
        - Helps the helpdesk for tracking of devices
        - Inventory (i.e. laptops, desktops, servers, etc.)
        - Enumeration
            - Lists all parts if an asset (i.e. CPU, memory, storage drive, keyboard)

- Disposal/decommissioning
    - Remove all data. It wont be used again

- Destruction
    - Physically destroy hardware

- Certification
    - Destruction of hardware by a third party. There is a confirmation that the hardware is destroyed.
    - Used when a organization does not have time destroy the hardware themselves

- Data retention
    - Backup data
    - Follow compliance (i.e. certain amount of data needs to be kept)
    - Different data types have different procedures


# Vulnerability Scanning
- Vulnerability scans only check what potential vulnerabilities are there like a port scan
    - Not all scans are accurate. Need to review reports to view what is accurate and whats not

- Static analysis
    - Scans for multiple vulnerabilities to help identify security flaws
    - The vulnerabilities are found easily

- Dynamic analysis(Fuzzing)
    - Sends random input to an application in order to see what the output might be (i.e. fault injecting, robustness testing, syntax testing, negative testing)

- Package monitoring
    - Some applications are distributed in a package. You need to confirm the package is legitimate
    - Confirm package is safe before deploying


# Threat Intelligence
- Open-source intelligence (OSINT)
    - Use discussion groups or anything public including the government
    - Commercial data like maps, financials are also usable

- Proprietary/third-party
    - They can analyze threats across multiple organizations simultaneously

- Information-sharing organization
    - Can be private or public organizations
    - The data is shared for critical security details about threats (i.e. Cyber Threat Alliance)
        - Information is uploaded and members can use the information whenever they need it

- Dark web
    - The attacker themselves and the information they've successfully stolen