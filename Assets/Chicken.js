#pragma strict

public var moveSpeed : float = 10f;
public var turnSpeed : float = 75f;

function Start () {
}

function Update () {
  transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
  transform.Rotate(Vector3.up, -turnSpeed * Time.deltaTime);
}
