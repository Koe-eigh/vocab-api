# セットアップ。今後DBを使うようになればシードデータの挿入も行う
.PHONY: setup
setup:
	@if [ ! -f .env ]; then \
		cp .env.example .env; \
		echo ".env file created from .env.example"; \
	fi
	docker compose build --no-cache

.PHONY: up
up:
	docker compose up

.PHONY: test
test:
	docker compose up -d
# npmコマンドの終了を待つ
	docker compose exec core /bin/sh -c 'while ! ps aux | grep "node" | grep -v grep > /dev/null; do sleep 0.1; done'
	docker compose exec core npm run test
	docker compose down
