package main

import (
	"fmt"
	"os"
)

func main() {
	//env name same as markup
	fmt.Printf("hello %s, plugin testing!\r\n", os.Getenv("Succubus_username"))
	var in string
	fmt.Print("Prompt>")
	fmt.Scan(&in)

	fmt.Println("we got ", in)
}
