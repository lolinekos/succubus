package main

import (
	"fmt"
	"os"
)

func main() {
	for i, s := range os.Environ() {
		fmt.Printf("[%d] Env: %s\r\n", i, s)
	}
}
