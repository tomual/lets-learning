package com.coffeemember.members;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@org.springframework.stereotype.Service
public class Service {

    private OkHttpClient client = new OkHttpClient();
    Response response;

    public Post getPost() {
        String url = "https://jsonplaceholder.typicode.com/posts/1";
        RestTemplate restTemplate = new RestTemplate();
        Post post = restTemplate.getForObject(url, Post.class);
        return post;
    }

    public JSONArray getPosts() {
        JSONArray json = new JSONArray();
        Request request = new Request.Builder()
                .url("https://jsonplaceholder.typicode.com/posts")
                .build();

        try {
            response = client.newCall(request).execute();
            json = new JSONArray(response.body().string());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return json;
    }
}
