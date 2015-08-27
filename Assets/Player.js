#pragma strict

public var moveSpeed : float = 20f;
public var turnSpeed : float = 75f;

static var ball_count = 1;

function Start () {
}

function Update () {
  if(Input.GetKey(KeyCode.UpArrow)){
    transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
  }
  if(Input.GetKey(KeyCode.DownArrow)){
    transform.Translate(-Vector3.forward * moveSpeed * Time.deltaTime);
  }
  if(Input.GetKey(KeyCode.LeftArrow)){
    transform.Rotate(Vector3.up, -turnSpeed * Time.deltaTime);
  }
  if(Input.GetKey(KeyCode.RightArrow)){
    transform.Rotate(Vector3.up, turnSpeed * Time.deltaTime);
  }

  if(transform.position.y < 0){
    transform.position.x = 0;
    transform.position.z = 0;
    transform.position.y = 20;
  }
}
