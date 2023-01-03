# uw-net-logon

*Veeery* simple script that automatically logs me in to my university network. Vanilla Node.js.

<br />

## Changelog

### 1/3/2023 
It looks like configuration on Palo Alto Networks firewall in my university network has been altered and therefore the script must use another URL query parameters. Especially, vsys (virtual subsystem) shifted from vsys=2 to vsys=1 and rule (captive access rule) changed from rule=4 to also rule=1.


Also, a new parameter called token can be observed if we're being redirected to captive protal through sinkholing. It seems to be dependent on the original url (that was "hijacked") - probably a security measure, now it's not required to authenticate so I wasn't digging into that.

sources:

[captive portal - wikipedia](https://en.wikipedia.org/wiki/Captive_portal) <br />
[captive portal - palo alto networks kb](https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA14u000000CqbiCAC)
