package com.feedback.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


import com.feedback.api.model.Feedback;
import com.feedback.api.repository.FeedbackRepository;

@RestController
@RequestMapping("/api/feedback/")
public class FeedbackController {

	@Autowired
	private FeedbackRepository feedbackRepo;
	
	// get all feedbacks
	@GetMapping("allFeedbacks")
	public List<Feedback> getAllFeedback(){
		return feedbackRepo.findAll();
	}
	
	//post feedbacks
	@CrossOrigin("*")
	@PostMapping("give-feedback")
	public Feedback give_feedback(@RequestBody Feedback feedback ) {
		return feedbackRepo.save(feedback);
	}
}
