#pragma strict

function Start () {

}

function Update () {
  gameObject.GetComponent.<TextMesh>().text = "There are " + Player.ball_count + "/2000 balls in the pit.";
}
