package main

import (
	"bytes"
	"github.com/go-playground/assert/v2"
	"io"
	"mime/multipart"
	"net/http/httptest"
	"openmart-app/unittest"
	"os"
	"path/filepath"
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
}

func TestCreateItem(t *testing.T) {
	path := "/Users/haowenchen/Desktop/1.jpeg"
	file, err := os.Open(path)
	if err != nil {
		t.Error(err)
	}
	defer file.Close()
	body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)
	part, err := writer.CreateFormFile("my_file", filepath.Base(path))
	if err != nil {
		writer.Close()
		t.Error(err)
	}
	io.Copy(part, file)
	writer.Close()
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/:id/item/save"
	param := map[string]interface{}{
		"upload[]": path,
	}
	w = unittest.PostJson(urlIndex, param, router)
	assert.Equal(t, 201, w.Code)
}

func TestDeleteItem(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/:id/item/:pid/remove"
	param := make(map[string]interface{})
	param["id"] = 4
	w = unittest.PostJson(urlIndex, param, router)
	assert.Equal(t, 200, w.Code)
}

func TestUpdateItem(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/:id/item/:pid/update"
	param := map[string]interface{}{
		"id":          1,
		"category":    "sports",
		"name":        "basketball",
		"description": "a basketball with good condition",
		"price":       10,
	}
	w = unittest.PostJson(urlIndex, param, router)
	assert.Equal(t, 200, w.Code)
}

func TestUpdatePh(t *testing.T) {
	path := "/Users/haowenchen/Desktop/1.jpeg"
	file, err := os.Open(path)
	if err != nil {
		t.Error(err)
	}
	defer file.Close()
	body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)
	part, err := writer.CreateFormFile("my_file", filepath.Base(path))
	if err != nil {
		writer.Close()
		t.Error(err)
	}
	io.Copy(part, file)
	writer.Close()
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/:id/item/:pid/updatePh"
	param := map[string]interface{}{
		"upload[]": path,
	}
	w = unittest.PostJson(urlIndex, param, router)
	assert.Equal(t, 200, w.Code)
}

func TestGetItembyCAT(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/2/item/category/sports"
	w = unittest.Get(urlIndex, router)
	assert.Equal(t, 200, w.Code)
}

func TestGetItembyCATPRD(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/2/item/category/sports/PRD"
	w = unittest.Get(urlIndex, router)
	assert.Equal(t, 200, w.Code)
}

func TestGetItembyCATPRA(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/2/item/category/sports/PRA"
	w = unittest.Get(urlIndex, router)
	assert.Equal(t, 200, w.Code)
}

func TestGetItembyCATLT(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/2/item/category/sports/LT"
	w = unittest.Get(urlIndex, router)
	assert.Equal(t, 200, w.Code)
}

func TestGetItembyName(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/2/item/name/basketball"
	w = unittest.Get(urlIndex, router)
	assert.Equal(t, 200, w.Code)
}

func TestGetItembyNamePRD(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/2/item/name/basketball/PRD"
	w = unittest.Get(urlIndex, router)
	assert.Equal(t, 200, w.Code)
}

func TestGetItembyNamePRA(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/2/item/name/basketball/PRA"
	w = unittest.Get(urlIndex, router)
	assert.Equal(t, 200, w.Code)
}

func TestGetItembyNameLT(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/2/item/name/basketball/LT"
	w = unittest.Get(urlIndex, router)
	assert.Equal(t, 200, w.Code)
}

func TestCreateComment(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/:id/item/:pid/comment/save"
	param := map[string]interface{}{
		"user_id": 4,
		"name":    "Haowen",
	}
	w = unittest.PostJson(urlIndex, param, router)
	assert.Equal(t, 201, w.Code)
}

func TestDeleteComment(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/:id/comment/delete"
	param := make(map[string]interface{})
	param["id"] = 4
	w = unittest.PostJson(urlIndex, param, router)
	assert.Equal(t, 200, w.Code)
}

func TestQueryCommentbyItem(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/3/item/4/comment/itemList"
	w = unittest.Get(urlIndex, router)
	assert.Equal(t, 200, w.Code)
}

func TestQueryCommentbyUser(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/3/item/4/comment/userList"
	w = unittest.Get(urlIndex, router)
	assert.Equal(t, 200, w.Code)
}
