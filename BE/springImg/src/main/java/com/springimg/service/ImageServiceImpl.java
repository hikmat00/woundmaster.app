package com.springimg.service;

import com.springimg.model.Image;
import com.springimg.repository.ImageRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageServiceImpl implements ImageService {

    @Autowired
    private ImageRepositoy repositoy;

    @Override
    public Image create(Image image) {
        return repositoy.save(image);
    }

    @Override
    public List<Image> vieAll() {
        return(List<Image>) repositoy.findAll();
    }

    @Override
    public Image viewById(Long id) {
        return repositoy.findById(id).get();
    }
}
