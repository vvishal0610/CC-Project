package com.feedback.api.model;

import jakarta.persistence.*;

@Entity
@Table(name="feedback")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="feedback_id")
	private int id;
	
	@Column(name = "student_id")
	private long student_id;
	
	@Column(name = "firstname")
	private String firstname;
	
	@Column(name = "lastname")
	private String lastname;
	
	@Column(name = "telnum")
	private String telnum;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "academics")
	private String academics;
	
	@Column(name = "architecture")
	private String architecture;
	
	@Column(name = "joboppor")
	private String joboppor;
	
	@Column(name = "message")
	private String message;
	
	public Feedback() {
		
	}
	
	public Feedback(int id, long student_id, String firstname, String lastname, String telnum, String email,
			String academics, String architecture, String joboppor, String message) {
		super();
		this.id = id;
		this.student_id = student_id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.telnum = telnum;
		this.email = email;
		this.academics = academics;
		this.architecture = architecture;
		this.joboppor = joboppor;
		this.message = message;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	public long getStudent_id() {
		return student_id;
	}
	public void setStudent_id(long student_id) {
		this.student_id = student_id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getTelnum() {
		return telnum;
	}
	public void setTelnum(String telnum) {
		this.telnum = telnum;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAcademics() {
		return academics;
	}
	public void setAcademics(String academics) {
		this.academics = academics;
	}
	public String getArchitecture() {
		return architecture;
	}
	public void setArchitecture(String architecture) {
		this.architecture = architecture;
	}
	public String getJoboppor() {
		return joboppor;
	}
	public void setJoboppor(String joboppor) {
		this.joboppor = joboppor;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
}