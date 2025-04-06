<?php

namespace App\Models\Tenant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Stancl\Tenancy\Database\Models\Tenant as BaseTenant;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Database\Concerns\HasDatabase;
use Stancl\Tenancy\Database\Concerns\HasDomains;

class Tenant extends BaseTenant implements TenantWithDatabase
{

    use HasDatabase, HasDomains, HasFactory;

    protected $fillable = ['name', 'email', 'password', 'data'];

    protected $casts = [
        'data' => 'array',
    ];

    public static function getCustomColumns(): array
    {
        
        return [
            'id',
            'name',
            'email',
            'password',
            'data'
        ];
    }


    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }
    
}

