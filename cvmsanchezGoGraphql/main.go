package main

import (
	"fmt"
	"net/http"

	"./auth"
	"./handler"
	"github.com/friendsofgo/graphiql"
)

func main() {
	fmt.Println("Starting the application at :3000...")
	graphiqlHandler, err := graphiql.NewGraphiqlHandler("/graphql")
	if err != nil {
		panic(err)
	}

	http.Handle("/graphql", handler.GqlHandler())
	http.Handle("/graphiql", graphiqlHandler)
	http.HandleFunc("/login", auth.CreateTokenEndpoint)
	http.ListenAndServe(":3000", nil)
}
