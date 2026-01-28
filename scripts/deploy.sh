#!/bin/bash
# ============================================
# CCOGNITIONS DEPLOYMENT SCRIPT
# ============================================
# Uses Cloudflare for SSL (no certbot needed)
# Run this script on your Digital Ocean server
# Usage: ./scripts/deploy.sh [deploy|update|stop|logs|status]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  CCOGNITIONS DEPLOYMENT SCRIPT${NC}"
echo -e "${GREEN}========================================${NC}"

# Check if .env.production exists
if [ ! -f ".env.production" ]; then
    echo -e "${RED}ERROR: .env.production file not found!${NC}"
    echo "Please create .env.production with your production values"
    echo "You can copy from .env.production.example"
    exit 1
fi

case "$1" in
    deploy)
        echo -e "${YELLOW}Starting deployment...${NC}"

        # Build and start containers
        echo -e "${YELLOW}Building Docker images...${NC}"
        docker compose -f docker-compose.prod.yml --env-file .env.production build

        echo -e "${YELLOW}Starting containers...${NC}"
        docker compose -f docker-compose.prod.yml --env-file .env.production up -d

        echo -e "${GREEN}========================================${NC}"
        echo -e "${GREEN}  DEPLOYMENT COMPLETE!${NC}"
        echo -e "${GREEN}========================================${NC}"
        echo ""
        echo -e "${YELLOW}Your app is running on port 8080${NC}"
        echo ""
        echo -e "${YELLOW}NEXT STEPS:${NC}"
        echo "1. Configure Cloudflare DNS (see instructions below)"
        echo "2. Test: curl http://YOUR_SERVER_IP:8080/api/health"
        echo "3. Visit: https://ccognitions.com (after Cloudflare setup)"
        ;;

    update)
        echo -e "${YELLOW}Updating deployment...${NC}"

        # Pull latest code (if using git)
        echo -e "${YELLOW}Pulling latest changes...${NC}"
        git pull origin main || echo "Git pull skipped"

        # Rebuild and restart
        echo -e "${YELLOW}Rebuilding Docker images...${NC}"
        docker compose -f docker-compose.prod.yml --env-file .env.production build

        echo -e "${YELLOW}Restarting containers...${NC}"
        docker compose -f docker-compose.prod.yml --env-file .env.production up -d

        echo -e "${GREEN}Update complete!${NC}"
        ;;

    stop)
        echo -e "${YELLOW}Stopping all containers...${NC}"
        docker compose -f docker-compose.prod.yml down
        echo -e "${GREEN}All containers stopped.${NC}"
        ;;

    restart)
        echo -e "${YELLOW}Restarting containers...${NC}"
        docker compose -f docker-compose.prod.yml --env-file .env.production restart
        echo -e "${GREEN}Containers restarted.${NC}"
        ;;

    logs)
        echo -e "${YELLOW}Showing logs (Ctrl+C to exit)...${NC}"
        docker compose -f docker-compose.prod.yml logs -f
        ;;

    logs-web)
        echo -e "${YELLOW}Showing web logs (Ctrl+C to exit)...${NC}"
        docker compose -f docker-compose.prod.yml logs -f web
        ;;

    status)
        echo -e "${YELLOW}Container status:${NC}"
        docker compose -f docker-compose.prod.yml ps
        ;;

    shell)
        echo -e "${YELLOW}Entering web container shell...${NC}"
        docker compose -f docker-compose.prod.yml exec web sh
        ;;

    *)
        echo "Usage: $0 {deploy|update|stop|restart|logs|logs-web|status|shell}"
        echo ""
        echo "Commands:"
        echo "  deploy   - Build and start all containers"
        echo "  update   - Pull changes and redeploy"
        echo "  stop     - Stop all containers"
        echo "  restart  - Restart all containers"
        echo "  logs     - View all container logs"
        echo "  logs-web - View only web container logs"
        echo "  status   - Show container status"
        echo "  shell    - Enter web container shell"
        exit 1
        ;;
esac
