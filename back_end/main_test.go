package main

import (
	"github.com/go-playground/assert/v2"
	"net/http/httptest"
	"openmart-app/unittest"
	"testing"
)

func TestLoginHandler(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/auth"
	param := map[string]interface{}{
		"email":    "c",
		"password": "123",
	}
	w = unittest.PostJson(urlIndex, param, router)
	assert.Equal(t, 200, w.Code)
}

func TestCreateUser(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/sign-up"
	param := map[string]interface{}{
		"email":    "caa",
		"password": "123",
		"name":     "chencaa",
		"phone":    "111",
	}
	w = unittest.PostJson(urlIndex, param, router)
	assert.Equal(t, 201, w.Code)
	assert.Equal(t, "{\"message\":\"success!\"}", w.Body.String())
}

func TestGetUser(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/2"
	w = unittest.Get(urlIndex, router)
	assert.Equal(t, 200, w.Code)
	assert.Equal(t, "{\"email\":\"che@\",\"name\":\"chenhaowe\",\"phone\":\"111\"}", w.Body.String())
}

func TestDeleteUser(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/:id/remove"
	param := make(map[string]interface{})
	param["id"] = 9
	w = unittest.PostJson(urlIndex, param, router)
	assert.Equal(t, 200, w.Code)
	assert.Equal(t, "{\"message\":\"Successfully delete!\"}", w.Body.String())
}

func TestUpdateUser(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/:id/update"
	param := map[string]interface{}{
		"id":       1,
		"email":    "hao",
		"password": "1234",
		"name":     "long",
		"phone":    "1112",
	}
	w = unittest.PostJson(urlIndex, param, router)
	assert.Equal(t, 200, w.Code)
	//assert.Equal(t, "{\"message\":\"Success\"}", w.Body.String())
}
