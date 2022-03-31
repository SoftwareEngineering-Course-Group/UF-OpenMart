1.Install the latest version for Go
	curl -OL https://golang.org/dl/go1.16.7.linux-amd64.tar.gz
	sha256sum go1.16.7.linux-amd64.tar.gz
	sudo tar -C /usr/local -xvf go1.16.7.linux-amd64.tar.gz
	
2.Run the back-end
	the dependencies will automatically add the the project
	cd back_end
	sudo go run main.go