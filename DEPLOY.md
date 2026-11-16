# Deployment status — 2026-11-16

This repository is a static preview, not the current WordPress production source for lamurinagallery.com. The live custom theme and plugins belong to aidinshaddd/miladshabazi-lamurinagallery.com-.

The former pipeline could report success while skipping every hosting transport. It also contained force-promotion of branches and disabled FTP certificate verification. The workflow now only verifies the static preview and identifies the production repository; it does not publish over WordPress. Historical GitHub Pages runs do not prove hosting publication.

Use DEPLOYMENT.md and the production workflow in the WordPress repository for the actual deployment flow. Existing .cpanel.yml and the legacy live-sync plugin in this static repository are historical, unverified deployment examples; do not activate them against the WordPress root.
