package main

import (
	"io"
	"net/http"
	"os"

	"github.com/sparkymat/reactor"
	"github.com/sparkymat/resty"
	shttp "github.com/sparkymat/webdsl/http"
	"github.com/sparkymat/youhaveto-react/controller"
)

func main() {
	r := resty.NewRouter()
	r.EnableDebug()

	r.Resource([]string{"users"}, controller.User{}).Only().
		Collection("login", []shttp.Method{shttp.Post}).
		Collection("logout", []shttp.Method{shttp.Post}).
		Collection("register", []shttp.Method{shttp.Post})

	r.HandleFunc("/", func(response http.ResponseWriter, request *http.Request) {
		app := reactor.New("YouHaveToApp")
		app.MapJavascriptFolder("public/js", "js")
		app.MapCssFolder("public/css", "css")

		io.WriteString(response, app.Html().String())
	})

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./public/")))

	r.PrintRoutes(os.Stdout)
	r.HandleRoot()

	http.ListenAndServe(":5000", nil)
}
