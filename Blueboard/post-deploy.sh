#!/bin/bash

echo "Applying migrations"
exec "$(pwd)/ef-core-migrate"

echo "Restarting backend"
sudo "$(which blueboard-ctl) restart"
