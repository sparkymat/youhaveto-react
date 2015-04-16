SRC = $(wildcard *.es6)
LIB = $(SRC:%.es6=%.js)

all: $(LIB)

%.js: %.es6
	babel $< -o $@
