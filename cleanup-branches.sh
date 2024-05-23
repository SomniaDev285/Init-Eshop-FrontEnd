#!/bin/bash

# Fetch the latest updates from the remote repository
echo "1. Fetching latest updates from remote..."
git fetch --prune

# Switch to the main branch (or your default branch)
echo "2. Switching to main branch..."
git checkout main

# Pull the latest changes in the main branch
echo "3. Pulling latest changes in main branch..."
git pull origin main

# List all branches that have been merged into main
echo "4. Finding merged branches..."
merged_branches=$(git branch --merged main | grep -v "^\* main$")

# Delete merged branches
if [ -n "$merged_branches" ]; then
  echo "- Deleting merged branches..."
  echo "$merged_branches" | xargs -n 1 git branch -d
else
  echo "- No merged branches to delete."
fi

# Prune remote-tracking branches that no longer exist on the remote
echo "5. Pruning remote-tracking branches..."
git remote prune origin

echo "=> Branch cleanup complete!"
