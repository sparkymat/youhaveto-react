package main

import (
	"net/http"
	"os"

	"github.com/sparkymat/resty"
	shttp "github.com/sparkymat/webdsl/http"
	"github.com/sparkymat/youhaveto-react/controller"
)

func main() {
	r := resty.NewRouter()
	r.Resource([]string{"users"}, controller.User{}).Only().
		Collection("login", []shttp.Method{shttp.Post}).
		Collection("logout", []shttp.Method{shttp.Post}).
		Collection("register", []shttp.Method{shttp.Post})

	r.MuxRouter().PathPrefix("/").Handler(http.FileServer(http.Dir("./public/")))

	r.PrintRoutes(os.Stdout)
	r.HandleRoot()

	http.ListenAndServe(":5000", nil)
}
