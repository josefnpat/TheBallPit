#pragma strict

public var delay : float = 1;
public var delay_dt : float = delay;

var arr = new Array ();
arr.Push(Color.red);
arr.Push(Color.blue);
arr.Push(Color.green);
arr.Push(Color.yellow);

function Start () {
  gameObject.GetComponent.<Renderer>().material.color = arr[Random.Range(0,(arr.length))];
}

function Update () {
  delay_dt -= Time.deltaTime;
  if(delay_dt <= 0 & Player.ball_count < 2000){
    Player.ball_count += 1;
    delay_dt = Random.Range(delay+0.0,delay+3.0);
    Instantiate(gameObject);
  }

  if(transform.position.y < 0){
    Destroy(gameObject);
    Player.ball_count -= 1;
  }

}
