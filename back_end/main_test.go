package main

import (
	"bytes"
	"encoding/json"
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
	var test = []struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}{
		{"c", "123"},
		{"cc", "123"},
		{"ca", "123"},
	}
	for _, c := range test {
		b, _ := json.Marshal(&c)
		var param map[string]interface{}
		_ = json.Unmarshal(b, &param)
		w = unittest.PostJson(urlIndex, param, router)
		assert.Equal(t, 200, w.Code)
	}
}

func TestCreateUser(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/sign-up"
	var test = []struct {
		Email    string `json:"email"`
		Password string `json:"password"`
		Name     string `json:"name"`
		Phone    string `json:"phone"`
	}{
		{"haohao", "1234", "cheneeen", "1112"},
		{"aoa", "123", "asdd", "321"},
		{"seee", "123", "uweoic", "111"},
		{"nnnn", "123", "andasna", "111"},
	}
	for _, c := range test {
		b, _ := json.Marshal(&c)
		var param map[string]interface{}
		_ = json.Unmarshal(b, &param)
		w = unittest.PostJson(urlIndex, param, router)
		assert.Equal(t, 201, w.Code)
		assert.Equal(t, "{\"message\":\"success!\"}", w.Body.String())
	}
}

func TestGetUser(t *testing.T) {
	router := setupRouter()
	var w *httptest.ResponseRecorder
	urlIndex := "/user/2"
	//urlIndex := "/user/3"
	//urlIndex := "/user/4"
	//urlIndex := "/user/5"
	//urlIndex := "/user/6"
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
	var test = []struct {
		Id       uint   `json:"id"`
		Email    string `json:"email"`
		Password string `json:"password"`
		Name     string `json:"name"`
		Phone    string `json:"phone"`
	}{
		{1, "haohao", "1234", "cheneeen", "1112"},
		{2, "aoa", "123", "asdd", "321"},
		{3, "seee", "123", "uweoic", "111"},
		{4, "nnnn", "123", "andasna", "111"},
	}
	for _, c := range test {
		b, _ := json.Marshal(&c)
		var param map[string]interface{}
		_ = json.Unmarshal(b, &param)
		w = unittest.PostJson(urlIndex, param, router)
		assert.Equal(t, 200, w.Code)
	}
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
	var test = []struct {
		Id          uint    `json:"id"`
		Category    string  `json:"category"`
		Name        string  `json:"name"`
		Description string  `json:"description"`
		Price       float32 `json:"price"`
	}{
		{1, "sports", "basketball", "a basketball with good condition", 10},
		{2, "sports", "football", "a football with badd condition", 30},
		{3, "sports", "volleyball", "a volleyball with good condition", 50},
		{4, "sports", "basketball", "a basketball with good condition", 20},
	}
	for _, c := range test {
		b, _ := json.Marshal(&c)
		var param map[string]interface{}
		_ = json.Unmarshal(b, &param)
		w = unittest.PostJson(urlIndex, param, router)
		assert.Equal(t, 200, w.Code)
	}
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
