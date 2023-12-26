package com.springimg.repository;

import com.springimg.model.Image;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepositoy extends CrudRepository<Image, Long> {
}
