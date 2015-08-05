package controller

import (
	"net/http"
	"github.com/asaskevich/govalidator"
	"encoding/json"
)

type User struct {
}

func (user User) Login(response http.ResponseWriter, request *http.Request, params map[string][]string) {
}

func (user User) Logout(response http.ResponseWriter, request *http.Request, params map[string][]string) {
}

func (user User) Register(response http.ResponseWriter, request *http.Request, params map[string][]string) {
	var email, password, name string

	errors := []string{}

	emails, ok := params["email"]
	if !ok || len(emails) == 0 {
		errors = append(errors, "E-mail is required")
	} else {
		email = emails[0]
	}

	passwords, ok := params["password"]
	if !ok || len(passwords) == 0 {
		errors = append(errors, "Password is required")
	} else {
		password = passwords[0]
	}

	names, ok := params["name"]
	if !ok || len(names) == 0 {
		errors = append(errors, "Name is required")
	} else {
		name = names[0]
	}

	if !govalidator.IsEmail(email) {
		errors = append(errors, "E-mail is not valid")
	}

	if len(password) < 8 {
		errors = append(errors, "Password needs at least 8 characters")
	}

	if len(name) == 0 {
		errors = append(errors,  "Name cannot be blank")
	}

	if len(errors) > 0 {
		jsonHash := make(map[string][]string)
		jsonHash["errors"] = errors
		jsonBytes, _ := json.Marshal(jsonHash)
		http.Error(response, string(jsonBytes) , 422)
		return
	}

	response.Write([]byte("success"))
}
