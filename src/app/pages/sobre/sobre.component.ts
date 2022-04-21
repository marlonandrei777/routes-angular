import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  /* injenção de dependencia */
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  /* pegando as informações */
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) =>
      console.log(res['id'], res['username'], res)
    );

    /* pegando os queryparams */
    this.activatedRoute.queryParams.subscribe((res) => console.log(res));

    /* redirecionando para outra pagina via Router */
    /* setInterval(() => { */
    /* Passamos para dentro de navigate a rota para ele ir
      e fazer esse redirecionamento*/
    /* this.router.navigate(['404']);
      this.router.navigateByUrl('404');
    }, 4000); */
  }
}
