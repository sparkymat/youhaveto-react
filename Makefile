STORES_SRC = $(wildcard app/stores/*.es6)
STORES_LIB = $(STORES_SRC:app/stores/%.es6=public/js/app/stores/%.js)
MODELS_SRC = $(wildcard app/models/*.es6)
MODELS_LIB = $(MODELS_SRC:app/models/%.es6=public/js/app/models/%.js)
COMPONENTS_SRC = $(wildcard app/components/*.es6)
COMPONENTS_LIB = $(COMPONENTS_SRC:app/components/%.es6=public/js/app/components/%.js)

GO_BINARY = youhaveto 
GO_SRC = youhaveto.go controller/user.go

build: $(MODELS_LIB) $(STORES_LIB) $(COMPONENTS_LIB) $(GO_BINARY)

all: build

$(GO_BINARY): $(GO_SRC)
	go build youhaveto.go

public/js/app/models/%.js: app/models/%.es6
	mkdir -p public/js/app/models
	babel $< -o $@

public/js/app/stores/%.js: app/stores/%.es6
	mkdir -p public/js/app/stores
	babel $< -o $@

public/js/app/components/%.js: app/components/%.es6
	mkdir -p public/js/app/components
	babel $< -o $@

clean: 
	rm -f $(GO_BINARY)
	rm -rf public/js/app

run: build
	go run youhaveto.go
