dev:
	docker compose up

sh:
	docker compose exec web sh

stop:
	docker compose stop

kill:
	docker compose kill

down:
	docker compose down --volumes --remove-orphans --rmi 'all'
