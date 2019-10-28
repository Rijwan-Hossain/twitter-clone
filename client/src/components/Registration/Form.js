import React, { useState, useEffect } from 'react' 

function Form() { 
    let [state, setState] = 
        useState({ 
            name: '', email: '', 
            password: '', confirmPassword: ''
        }) 
    return ( 
        <div style={{ 
            padding: '30px',
            border: '1px solid rgb(238, 238, 238)',
            boxShadow: '0px 2px 4px 0px rgb(226, 226, 226)'
        }}> 
            <form>
                <div className="form-group">
                    <input
                        type="name"
                        name="name"
                        className="form-control col-md-12 my-3"
                        placeholder="Enter Your Name"
                        // value={this.state.name}
                        // onChange={this.changeHandler}
                        required
                    /> 
                    {/* { 
                        this.state.errors && this.state.errors.name && 
                        <p 
                            style={{
                                fontSize: '12px', 
                                color: 'red'
                            }}>
                            { this.state.errors.name }
                        </p>
                    }  */} 
                    <input
                        type="email"
                        name="email"
                        className="form-control col-md-12 my-3"
                        placeholder="Enter Your Email"
                        // value={this.state.email}
                        // onChange={this.changeHandler}
                        required
                    /> 
                    {/* { 
                        this.state.errors && this.state.errors.email && 
                        <p 
                            style={{
                                fontSize: '12px', 
                                color: 'red'
                            }}>
                            { this.state.errors.email }
                        </p>
                    }  */}
                    <input
                        type="password"
                        name="password"
                        className="form-control col-md-12 my-3"
                        placeholder="Enter Your Password"
                        // value={this.state.password}
                        // onChange={this.changeHandler}
                        required
                    /> 
                    {/* { 
                        this.state.errors && this.state.errors.password && 
                        <p 
                            style={{
                                fontSize: '12px', 
                                color: 'red'
                            }}>
                            { this.state.errors.password }
                        </p>
                    }  */}
                    <input
                        type="password"
                        name="confirmPassword"
                        className="form-control col-md-12 my-3"
                        placeholder="Confirm Password"
                        // value={this.state.confirmPassword}
                        // onChange={this.changeHandler}
                        required
                    /> 
                    {/* { 
                        this.state.errors && this.state.errors.confirmPassword && 
                        <p 
                            style={{
                                fontSize: '12px', 
                                color: 'red'
                            }}>
                            { this.state.errors.confirmPassword }
                        </p>
                    }  */}
                </div> 
                <button 
                    type="Submit" 
                    className="btn btn-primary mb-3"> 
                    Submit 
                </button> 
            </form> 
            
            {/* {
                this.state.duplicateMessage && 
                <Modal show={true}>
                    <ModalBody>
                        { this.state.duplicateMessage }
                    </ModalBody> 

                    <ModalFooter>
                        <Button onClick={this.userExist}>
                            close
                        </Button> 
                    </ModalFooter>
                </Modal> 
            } 

            {
                this.state.successMessage && 
                <Modal show={true}>
                    <ModalBody>
                        { this.state.successMessage }
                    </ModalBody> 
                </Modal> 
            } 

            {
                this.state.serverError && 
                <Modal show={true}>
                    <ModalBody>
                        Server Error 
                    </ModalBody> 

                    <ModalFooter>
                        <Button onClick={this.serverError}>
                            close
                        </Button> 
                    </ModalFooter>
                </Modal> 
            }  */}
        </div> 
    )
}

export default Form
