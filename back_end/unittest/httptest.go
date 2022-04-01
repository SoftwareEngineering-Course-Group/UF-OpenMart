package unittest

import (
	"bytes"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"net/http/httptest"
)

func ParseToStr(mp map[string]string) string {
	values := ""
	for key, val := range mp {
		values += "&" + key + "=" + val
	}
	temp := values[1:]
	values = "?" + temp
	return values
}

//get access controller
func Get(uri string, router *gin.Engine) *httptest.ResponseRecorder {
	// Construct the get request
	req := httptest.NewRequest("GET", uri, nil)
	// Initializing response
	w := httptest.NewRecorder()
	// Call the corresponding handler interface
	router.ServeHTTP(w, req)
	return w
}

//post access controller
func PostForm(uri string, param map[string]string, router *gin.Engine) *httptest.ResponseRecorder {
	req := httptest.NewRequest("POST", uri+ParseToStr(param), nil)
	// Initializing response
	w := httptest.NewRecorder()
	// Call the corresponding handler interface
	router.ServeHTTP(w, req)
	return w
}

//post json
func PostJson(uri string, param map[string]interface{}, router *gin.Engine) *httptest.ResponseRecorder {
	// Convert the parameter to a JSON bit stream
	jsonByte, _ := json.Marshal(param)
	// Construct the post request, where the JSON data is passed as the request body
	req := httptest.NewRequest("POST", uri, bytes.NewReader(jsonByte))
	// Initializing response
	w := httptest.NewRecorder()
	// Call the corresponding handler interface
	router.ServeHTTP(w, req)
	return w
}
