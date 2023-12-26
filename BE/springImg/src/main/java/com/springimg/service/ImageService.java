package com.springimg.service;

import com.springimg.model.Image;

import java.util.List;

public interface ImageService {
    public Image create(Image image);
    public List<Image> vieAll();
    public Image viewById(Long id);
}
